export const authTypeDef = `
type Auth {
    email: String!
    password: String!
    answer: String!
}

input AuthInput {
    email: String!
    password: String!
}
`;

export const authMutations = `
    createAuth(auth: AuthInput!): Auth!
`;
