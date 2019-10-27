import {useContext} from "react";
// @ts-ignore
import {__RouterContext} from "react-router-dom";

const useRouter = () => {
  return useContext(__RouterContext);
};

export default useRouter;
