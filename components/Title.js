import Head from "next/head";

function Title(props) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}

export default Title;
