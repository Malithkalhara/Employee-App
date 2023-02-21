import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header title="Employee manager"/>
      <Component {...pageProps} />
    </>  
  )
}
