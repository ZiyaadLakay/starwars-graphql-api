const fetch = require("node-fetch");
let currentPage = "https://swapi.dev/api/people/";
let nextPage = "";
let prevPage = "";
const resolvers = {
  Query: {
    getPeople() {
      return fetch(currentPage)
        .then((res) => res.json())
        .then((json) => {
          nextPage = json.next;
          prevPage = json.previous;
          return json;
        });
    },

    getPage(_, args) {
      currentPage = `https://swapi.dev/api/people/?page=${args.page}`;
      return fetch(currentPage)
        .then((res) => res.json())
        .then((json) => {
          nextPage = json.next;
          prevPage = json.previous;
          return json;
        })
        .catch((err) => {
          console.log("Cannot get Page \n ", err);
        });
    },

    searchPeople(_, args) {
      currentPage = `https://swapi.dev/api/people/?search=${args.person}`;
      return fetch(currentPage)
        .then((res) => res.json())
        .then((json) => {
          nextPage = json.next;
          prevPage = json.previous;
          return json;
        })
        .catch((err) => {
          console.log("Cannot get Page \n ", err);
        });
    },
    nextPage() {
      return fetch(nextPage)
        .then((res) => res.json())
        .then((json) => {
          nextPage = json.next;
          prevPage = json.previous;
          return json;
        })
        .catch((err) => {
          console.log("Cannot get next \n ", err);
        });
    },

    prevPage() {
      console.log(prevPage);
      return fetch(prevPage)
        .then((res) => res.json())
        .then((json) => {
          prevPage = json.next;
          prevPage = json.previous;
          return json;
        })
        .catch((err) => {
          console.log("Cannot get next \n ", err);
        });
    },

    getHomeworld(_, args) {
      return fetch(args.url)
        .then((res) => res.json())
        .then((json) => {
          return json;
        })
        .catch((err) => {
          console.log("Cannot get next \n ", err);
        });
    },
  },
};

module.exports = { resolvers };
