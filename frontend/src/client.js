import { createClient }  from "@sanity/client"

export const client= createClient({
    projectId: 'rnj6sc7s',
    dataset: 'production',
    useCdn: true,
    apiVersion: "v2023-05-03",
})