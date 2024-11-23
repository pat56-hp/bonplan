import { useAuthStateContext } from "@/contexts/AuthContextProvider";
import { Redirect } from "expo-router";
import { useEffect } from "react";

export default function Accueil(){
    const {token} = useAuthStateContext()
    return token ? <Redirect href="/(tabs)/" /> : <Redirect href="/auth/login" />
}