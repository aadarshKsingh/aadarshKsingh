import { createClient } from "@sanity/client"

 
export default createClient({
    projectId: "gt0u00s4",
    dataset: "production",
    apiVersion: '2021-10-21',
    useCdn: false
});