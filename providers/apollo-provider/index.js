import { ApolloProvider as ApolloClientProvider } from "@apollo/client";
import { apolloConfig } from "../../helpers/apollo-config";

export const ApolloProvider = ({children}) => {
  return (
    <ApolloClientProvider client={apolloConfig} >
      {children}
    </ApolloClientProvider>
  )
}
