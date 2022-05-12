import React from "react";

export default function Home({ data }) {
    return (
        <ol>
            {data.map((post, index) => (
                <li key={index}>{post.name}</li>
            ))}
        </ol>
    );
}

Home.getInitialProps = async (ctx) => {
    const res = await fetch('https://raw.githubusercontent.com/shahali007/portfolios/master/works.js')
    const data = await res.json();
    console.log(data);

    // Pass data to the page via props
    return { props: { data } };
  }
