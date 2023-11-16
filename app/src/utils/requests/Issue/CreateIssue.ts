
import { IssuesForm } from "@/app/src/pages/end-user/issues/new/page";
import axios from "axios";

export const AddIssueApi = async (data:IssuesForm) => {
   const res= await axios.post("/api/issues", data);
   return res;
  };
