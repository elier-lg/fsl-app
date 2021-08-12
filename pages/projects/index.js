import { ClientOnly } from "../../components/client-only";
import { ProjectsList } from "../../components/list-projects";
export default function Projects() {
  return <>
    <h1>Projects</h1>
    <ClientOnly>
      <ProjectsList />
    </ClientOnly>
  </>
}
