// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       authorize: async (credentials, req) => {
//         // Replace with your own user validation logic
//         const user = { id: '1', name: 'John Doe', email: 'johndoe@example.com' };
//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.name = user.name;
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token.name) {
//         session.user = session.user || {};
//         session.user.name = token.name;
//       }
//       if (token.email) {
//         session.user = session.user || {};
//         session.user.email = token.email;
//       }
//       return session;
//     }
//   },
// });






// // import NextAuth from 'next-auth';
// // import CredentialsProvider from 'next-auth/providers/credentials';

// // export default NextAuth({
// //   providers: [
// //     CredentialsProvider({
// //       name: 'Credentials',
// //       credentials: {
// //         email: { label: 'Email', type: 'text' },
// //         password: { label: 'Password', type: 'password' },
// //       },
// //       authorize: async (credentials) => {
// //         const user = { id: '1', name: 'John Doe', email: 'johndoe@example.com' };
// //         if (user) {
// //           return user;
// //         } else {
// //           return null;
// //         }
// //       },
// //     }),
// //   ],
// //   session: {
// //     strategy: 'jwt',
// //   },
// //   callbacks: {
// //     async jwt({ token, user }) {
// //       if (user) {
// //         token.id = user.id;
// //       }
// //       return token;
// //     },
// //     async session({ session, token }) {
// //         if (token.name) {
// //           session.user = session.user || {};
// //           session.user.name = token.name;
// //         }
// //         if (token.email) {
// //           session.user = session.user || {};
// //           session.user.email = token.email;
// //         }
// //         return session;
// //       }
// //   },
// // });




// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// declare module 'next-auth' {
//   interface Session {
//     user: {
//       id: string;
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//     };
//   }

//   interface JWT {
//     id: string;
//   }
// }

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' }
//       },
//       authorize: async (credentials) => {
//         const user = { id: '1', name: 'John Doe', email: 'johndoe@example.com' };
//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       }
//     })
//   ],
//   session: {
//     strategy: 'jwt'
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id;
//       }
//       return session;
//     }
//   }
// });
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Replace this with your own logic for validating credentials
        const user = { id: '1', name: 'John Doe', email: 'johndoe@example.com' };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.name) {
        session.user = session.user || {};
        session.user.name = token.name;
      }
      if (token.email) {
        session.user = session.user || {};
        session.user.email = token.email;
      }
      return session;
    },
  },
});
