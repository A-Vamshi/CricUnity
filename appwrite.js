import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';


export const config = {
     endpoint: "https://cloud.appwrite.io/v1",
     platform: "com.cricunity.cricunity",
     projectId: "66517ebd0007b29abab4",
     databaseId: "66517f4e0001b5756825",
     userCollectionId: "66517f76002ab7603ce8",
     questionCollectionId: "66517fa60021480c4c01",
     storageId: "665181c5001db6715c46",   
     rankCollectionId: "66544b820019605f01f7",
     buyerCollectionId: "665461dd001545042899",
}

const client = new Client();
client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client); 
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
     try {
          const newAccount = await account.create(ID.unique(), email, password, username);
          if (!newAccount) throw new Error;
          const avatarUrl = avatars.getInitials(username);
          await signIn(email, password);
          const userData = {
               accountId: newAccount.$id,
               email: email,
               coins: 0,
               username: username,
               avatar: avatarUrl, 
               rank: 0,
          }
          const newUser = await databases.createDocument(config.databaseId, config.userCollectionId, ID.unique(), userData);
          return newUser;
     } catch (error) {
          console.log("createUser " + error.message);
          throw new Error(error);
     }
}

export const signIn = async (email, password) => {
     try {
          const session = await account.createEmailPasswordSession(email, password);
          return session;
     } catch (error) {
          console.log("signIn " + error.message);
          throw new Error(error);
     }
}
  
export const getCurrentUser = async () => {
     try {
          const currentAccount =  await account.get();
          if (!currentAccount) throw Error;
          const currentUser = await databases.listDocuments(
               config.databaseId, 
               config.userCollectionId,
               [Query.equal("accountId", currentAccount.$id)] 
          )
          if (!currentUser) throw Error;
          return currentUser.documents[0];
     } catch (error) {
          console.log("getCurrentUser " + error);
          throw new Error(error);
     }
}

export const signOut = async () => {
     try {
          const session = await account.deleteSession("current");
          return session;
     } catch (error) {
          console.log("signOut " + error);
          throw new Error(error);
     }
}

export const getDocs = async () => {
     try {
          const result = await databases.listDocuments(config.databaseId, config.questionCollectionId, []);
          return result.documents;
     } catch (error) {
          console.log("getDocs " + error);
          throw new Error(error);
     }
}
export const getDoc = async (id) => {
     try {
          const result = await databases.listDocuments(config.databaseId, config.questionCollectionId, [Query.equal("$id", id)]);
          return result.documents;
     } catch (error) {
          console.log("getDoc " + error);
          throw new Error(error);
     }
}
export const addUser = async (docId, arr1, arr2) => {
     try {
          const result = await databases.updateDocument(
               config.databaseId,
               config.questionCollectionId,
               docId,
               {
                    yes: arr1,
                    no: arr2
               },
          );
          console.log(result);
          return result;
     } catch (error) {
          console.log("addUser " + error);
          throw new Error(error);
     }
}
export const getUsers = async () => {
     try {
          const result = await databases.listDocuments(config.databaseId, config.userCollectionId, []);
          return result.documents;
     } catch (error) {
          console.log("getUsers " + error);
          throw new Error(error);
     }
}
export const getRankers = async () => {
     try {
          const result = await databases.listDocuments(config.databaseId, config.rankCollectionId, []);
          return result.documents;
     } catch (error) {
          console.log("getRankers " + error);
          throw new Error(error);
     }
}
export const changeRanker = async (docId, username, coins) => {
     try {
          const result = await databases.updateDocument(
               config.databaseId,
               config.rankCollectionId,
               docId,
               {
                    Username: username,
                    Coins: coins,
               },
          );
          console.log(result);
          return result;
     } catch (error) {
          console.log("changeRanker " + error);
          throw new Error(error);
     }
}
export const buyItem = async ( username, coins ) => {
     try {
          const result = await databases.createDocument(config.databaseId, config.buyerCollectionId, ID.unique(), 
          {
               userId: username,
               Price: coins,
          }
          );
          return result;
     } catch (error) {
          console.log("buyItem " + error);
          throw new Error(error);
     }
}
export const updateCoins = async (userId, coins) => {
     try {
          const result = await databases.updateDocument(
               config.databaseId,
               config.userCollectionId,
               userId,
               {
                    coins: coins
               },
          );
          console.log(result);
          return result;
     } catch (error) {
          console.log("updateCoins " + error);
          throw new Error(error);
     }
}
export const changePic = async (userId, img) => {
     try {
          const result = await databases.updateDocument(
               config.databaseId,
               config.userCollectionId,
               userId,
               {
                    avatar: img
               },
          );
          console.log(result);
          return result;
     } catch (error) {
          console.log("changePic " + error);
          throw new Error(error);
     }
}

