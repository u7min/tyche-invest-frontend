module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "myinvest-backend",
      url: "http://localhost:5000/graphql",
    },
  },
};
