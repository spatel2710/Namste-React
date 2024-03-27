// const parent = React.createElement("div", { id: "parent" },[React.createElement("div", { id: "child" },
// [React.createElement("h1", { id: "heading" }, "This is  heading"),
//  React.createElement("h2", { id: "heading2" },"This is heading2")
// ]),React.createElement("div", { id: "child" },
// [React.createElement("h1", { id: "heading" }, "This is  heading"),
//  React.createElement("h2", { id: "heading2" },"This is heading2")
// ])]
// );

const parent = React.createElement("div",{class:"Navbar"},[React.createElement("a",{id:"home"},"Home"),React.createElement("a",{id:"about"},"About"),React.createElement("a",{id:"shop"},"Shop"),React.createElement("a",{id:"media"},"Media")]);




const heading = React.createElement("h1", { id: "headinggg" }, "This is first react program");

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent)
root.render(parent);


// const parent2 = React.createElement("div",{class:"navbar"},Home,about);
