import { IGetIsues } from "@/app/api/issues/route";
import axios from "axios";

export const GetIssuesApi = async () => {
    const res: IGetIsues[] = (await axios.get("/api/issues")).data;
    return res;
  };