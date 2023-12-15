import { useQuery } from "@tanstack/react-query"

export interface Team {
  id: number
  abbreviation: string
  city: string
  conference: "East" | "West"
  division: "Atlantic" | "Central" | "Southeast" | "Northwest" | "Pacific" | "Southwest"
  full_name: string
  name: string
}

async function fetchData() {
  const result = await fetch(`https://www.balldontlie.io/api/v1/teams`)
  const json = await result.json()
  return json.data
}

export function useTeams() {
  return useQuery<Team[]>({ queryKey: ["teams"], queryFn: fetchData })
}
