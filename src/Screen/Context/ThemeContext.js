import React, { createContext, useState, useEffect } from "react";
import { FIREBASE_DB, FIREBASE_AUTH } from "../../../FirebaseConfiguration";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDocs, collection, getDoc } from "firebase/firestore";
import { setItemAsync } from "expo-secure-store";
// import RNPickerSelect from "react-native-picker-select";
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fullName, setFullName] = useState("");
  const [dark, setDark] = useState(false);
  const [harvestingData, setHarvestingData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState("");
  const [userType, setUserType] = useState("");
  const [userData, setUserData] = useState([]);
  const [harvest, setHarvest] = useState(
    "https://tse4.mm.bing.net/th?id=OIP.iPTS9UwAQrbSQxRyeU-Q0AHaHa&pid=Api&P=0&h=220"
  );
  const [isLog, setIsLog] = useState(false);
  const [isLogging, setIsLogging] = useState(null);
  const [us, setUs] = useState('')
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validForm = () => {
    let valid = true;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    return valid;
  };

  const fetchDocumentData = async () => {
    try {
      const docSnapshot = await getDocs(
        collection(FIREBASE_DB, "farmerHarvest")
      );
      let data = [];
      docSnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      //search data based on the title
      if (search.trim() !== "") {
        data = data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      setHarvestingData(data);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    fetchDocumentData();
  }, [search]);

  const addToSelectedItems = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleChangeDark = () => {
    setDark((prev) => !prev);
  };

  const signUp = async (email, password, fullName, userType) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log({ user });
      const response = await setDoc(doc(FIREBASE_DB, "users", user.uid), {
        registerFullName: fullName,
        registerEmail: email,
        registerUserType: userType,
        registerHarvest: harvest,
      });
      console.log(response)
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  };

  // set in
  const signIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("User signed in successfully:", user);
      setIsLog(true)
      await setItemAsync("userDataOne", user.uid);
      await setItemAsync("userInformation", JSON.stringify({ fullName, email }))
      await setItemAsync("userEmail", email);
      
      setUs(user.uid);
      const userDocRef = doc(FIREBASE_DB, "users", user.uid);
      const userDocSnapShot = await getDoc(userDocRef);
      if (userDocSnapShot.exists()) {
        const userData = userDocSnapShot.data();
        await setItemAsync("role", userData.registerUserType);
        if ( userData && userData.registerUserType === "farmer") {
          console.log("user is farmer");
          setIsLogging("farmer");
        } else if (userData && userData.registerUserType === "farmerSpecialist") {
          console.log("user is farmerSpecialist");
          setIsLogging("farmerSpecialist");
        } else if (userData && userData.registerUserType === "customer") {
          console.log("user is customer");
          setIsLogging("customer");
        } else {
          console.log("user type not found");
        }
      } else {
        console.log("user document not exist ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        us,
        dark,
        setDark,
        harvestingData,
        setHarvestingData,
        selectedItems,
        addToSelectedItems,
        search,
        setSearch,
        signUp,
        signIn,
        searchData,
        setSearchData,
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        handleChangeDark,
        fetchDocumentData,
        validForm,
        fullName,
        setFullName,
        userType,
        setUserType,
        selectedItems,
        setSelectedItems,
        userData,
        isLog, setIsLog, isLogging, setIsLogging
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
