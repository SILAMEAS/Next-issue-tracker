import { IssuesForm } from "@/app/issues/new/page";
import axios from "axios";

export const AddIssueApi = async (data:IssuesForm) => {
   const res= await axios.post("/api/issues", data);
   return res;
  };