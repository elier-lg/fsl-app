import { useQuery, gql } from "@apollo/client"
import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@material-ui/core";

const QUERY = gql`
  query {
    clients {
      id
      name
      description
      website
    }
  }
`

export const ListClients = () => {
  const { data, loading, error } = useQuery(QUERY);

  if ( loading ) {
    return <h2>Loading...</h2>;
  }

  if ( error ) {
    console.log(error);
    return null;
  }

  const clients = data.clients;
  
  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell component="th" scope="row">
                  {client.id}
                </TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.description}</TableCell>
                <TableCell>{client.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )

}
