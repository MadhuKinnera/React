export default function Avatar(props){
    const {name,imgSrc,border} = props;
    const style = {border:"1px solid black" , borderRadius:border ? "50%":"16px" ,width:"200px"};
    return (
    <div>
     <img  style={style}  src={imgSrc} alt="avatar-img" />
     <h2>{name}</h2>
    </div>
    );
}