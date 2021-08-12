import { useQuery, gql } from "@apollo/client"
import { Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody } from "@material-ui/core";

const QUERY = gql`
query {
  clientProjects {
    id
    name
    client{
      name
    }
  }
}
`

export const ProjectsList = () => {
  const { data, loading, error } = useQuery(QUERY);

  if ( loading ) {
    return <h2>Loading...</h2>;
  }

  if ( error ) {
    console.log(error);
    return null;
  }

  const projects = data.clientProjects;
  
  return (
    <Grid item xs={12}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Client</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.client.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )

}
