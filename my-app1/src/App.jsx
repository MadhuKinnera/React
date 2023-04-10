import styles from "./App.module.css";
import Avatar from "./components/avatar";


export default function App() {
  const users= [{
    key:1,
    imgSrc:"https://avatars.githubusercontent.com/u/105916120?v=4",
    name:"Madhu Kinnera",
    border:true
  }, {
    key:2,
    imgSrc:"https://avatars.githubusercontent.com/u/62586172?v=4",
    name:"Ritesh",
    border:false
  }];

  const userAvatars = users.map(ele=><Avatar key={ele.key} imgSrc={ele.imgSrc} name={ele.name} border={ele.border}/>)

  return (
    <div className={styles.App}>
     {userAvatars}
    </div>
  );
}
