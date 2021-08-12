import ClientsList from "../../components/clientList";
import styles from './styles.module.scss'

export const clientData = [{
  id: 1, name: 'Godaddy',
  id: 2, name: 'google'
}]

export default function Clients() {
  return <div className={styles.holder}>
    <ClientsList rows={clientData} />
  </div>
}
