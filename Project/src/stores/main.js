import { defineStore } from 'pinia'
import axios from 'axios'
// temporary actions and state in this - used for setup
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    users: [{}],
    user: [],
    loggedIn: false,
    userClicked: false,
    loginerr: false,

  }),
  getters: {

  },

  actions: {
    logout() {
      this.loggedIn = false;
      this.user = [];
    },
    createUser(credentials) {
      axios
      .post( 
        '/kunder', credentials 
      )
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteUser(user) {
      axios
      .delete(
        '/kunde', user
      )
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getUsers() {
      axios
      .get(
        '/kunder'
      )
      .then((res) => {
        console.log(res)
        this.users = res.data.recordset
        console.log(this.users[0].fornavn)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    login(credentials) {
      return new Promise((resolve, reject) => {
      this.loginerr = false;
      axios
      .post(
        '/login', {
          username: credentials.name,
          password: credentials.password
        }
      )
      .then((res) => {
        console.log(res)
        this.user = res.data.recordset[0]
        console.log(this.user.fornavn)
        resolve(res)
      })
      .catch((error) => {
        console.log(error)
        this.loginerr = true;
        resolve(error)
      })
    })
    },
    flipMedlem(user) {
      axios
      .put(
        `/users/${user}`
      )
      .then((res) => {
        console.log(res)
        this.user.medlem = 'true'
        console.log(this.user.fornavn)
      })
      .catch((error) => {
        console.log(error)
      })
    },

  }
})

