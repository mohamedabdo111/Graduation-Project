import React from "react";
import UserImages from "../../components/user/userImages";
import UserInformation from "../../components/user/userInformation";
import UserComments from "../../components/user/userComments";
import GetApartmentDetailsHook from "../../hookPages/getApartmentDetailsHook";
import { useParams } from "react-router-dom";
import Loading from "../../components/fixed/Loading";
import { Fade } from "react-awesome-reveal";

const UserApartmentDetailsPage = () => {
  const { id } = useParams();
  const [loading, data, item] = GetApartmentDetailsHook(id);

  return (
    <div className=" container">
      {!loading ? (
        data && data !== "" ? (
          <>
            <Fade triggerOnce={true} direction="down">
              <UserImages apartmentInfo={item ? item : null}></UserImages>
            </Fade>

            <Fade triggerOnce={true} direction="up">
              <UserInformation userInfo={item ? item : null}></UserInformation>
            </Fade>

            <Fade triggerOnce={true} direction="up">
              <UserComments
                comment={item ? item.apartmentComments : null}
              ></UserComments>
            </Fade>
          </>
        ) : (
          <h1 className="for-not-found ">Details Not Founded</h1>
        )
      ) : (
        <h1 className="for-not-found my-10">
          <Loading></Loading>
        </h1>
      )}
    </div>
  );
};

export default UserApartmentDetailsPage;
