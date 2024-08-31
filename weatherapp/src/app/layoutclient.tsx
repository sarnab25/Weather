"use client"
import { Provider } from "react-redux";
import store from "@/app/lib/store";

export default function LayoutClient({
    children,

}: {
    children:React.ReactNode
})

{
    return <Provider store={store} > {children}</Provider>
}