import GitHubButton from "react-github-btn";
export default function Header() {
  //JSX returns only single element
  return (
    <header style={{ textAlign: "center" }}>
      <h1>React Search Emoji App 🦄 </h1>
      <h3>Simple Tool For Emojis</h3>
      <GitHubButton 
      data-size="large"
      data-show-count={true} 
      data-icon="octicon-star"
      href="https://github.com/nrcool"
      >
        star
      </GitHubButton>
      <GitHubButton 
      data-size="large" 
      data-show-count={true} data-icon="octicon-repo-forked"
      href="https://github.com/nrcool"
      >
        fork
      </GitHubButton>
    </header>
  );
}
