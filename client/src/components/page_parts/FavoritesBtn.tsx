import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import { userPatchFavorites } from "../../services/dbFunctions";
import { alertError } from "../../services/alertFunctions";

interface FavoritesBtnProps {
    cruiseNum: number
}

const FavoritesBtn: FunctionComponent<FavoritesBtnProps> = ({ cruiseNum }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    if (!userInfo) {
        return (
            // Not Logged In - Empty Heart 
            <button className="heartBtn" onClick={() => {
                alertError("Must be logged in to access this feature!")
            }}>
                <i className="fa-regular fa-heart"></i>
            </button>
        )
    } else if (userInfo.favorites.includes(cruiseNum)) {
        return (
            // Filled Heart
            <button className="heartBtn" onClick={() => {
                userInfo.favorites.splice(
                    userInfo.favorites.indexOf(cruiseNum), 1
                )

                sessionStorage.setItem("userInfo", JSON.stringify(userInfo))

                userPatchFavorites(sessionStorage.getItem("token") as string, userInfo.favorites)

                setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string))
            }}>
                <i className="fa-solid fa-heart"></i>
            </button>
        )
    } else {
        return (
            // Empty Heart
            <button className="heartBtn" onClick={() => {
                if (userInfo) {
                    userInfo.favorites.push(cruiseNum)

                    sessionStorage.setItem("userInfo", JSON.stringify(userInfo))

                    userPatchFavorites(sessionStorage.getItem("token") as string, userInfo.favorites)

                    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string))
                }
                else {
                    alertError("Must be logged in to access this feature")
                }
            }}>
                <i className="fa-regular fa-heart"></i>
            </button>
        )
    }
}

export default FavoritesBtn;