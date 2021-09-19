import { rest } from "msw";
export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),

  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            name: {
              first: "anwar",
              last: "aakash",
            },
            picture: {
              large:
                "https://images.unsplash.com/photo-1631904858416-9c26193f8923?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            },
            login: {
              username: "aaksh",
            },
          },
          {
            name: {
              first: "Nadia",
              last: "Nasrin",
            },
            picture: {
              large:
                "https://images.unsplash.com/photo-1631904858416-9c26193f8923?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            },
            login: {
              username: "nadia",
            },
          },
        ],
      })
    );
  }),
];
