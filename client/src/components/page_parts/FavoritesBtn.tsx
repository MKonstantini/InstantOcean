import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import { userGetUserInfo, userPatchFavorites } from "../../services/dbFunctions";
import { alertError } from "../../services/alertFunctions";

interface FavoritesBtnProps {
    cruiseNum: number
}

const FavoritesBtn: FunctionComponent<FavoritesBtnProps> = ({ cruiseNum }) => {
    const [userInfo, setUserInfo] = useContext(UserContext)


    return (
        <>
            {
                userInfo && userInfo.favorites.includes(cruiseNum) ? (
                    // Filled Heart
                    <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
                        userInfo.favorites.splice(
                            userInfo.favorites.indexOf(cruiseNum), 1
                        )

                        sessionStorage.setItem("userInfo", JSON.stringify(userInfo))

                        userPatchFavorites(sessionStorage.getItem("token") as string, userInfo.favorites)

                        setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string))
                    }}>
                        <i className="fa-solid fa-heart me-2"></i>
                        Favorite
                    </button>

                ) : (
                    // Empty Heart
                    <button className="btn btn-outline-secondary rounded-5 me-2" onClick={() => {
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
                        <i className="fa-regular fa-heart me-2"></i>
                        Favorite
                    </button>
                )
            }
        </>
    );
}

export default FavoritesBtn;