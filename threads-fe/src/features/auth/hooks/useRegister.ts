import { IUserRegister } from "@/interfaces/user";
import { API } from "@/libs/api";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate()
  const [form, setForm] = useState<IUserRegister>({
    email: "",
    username: "",
    full_name: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      await API.post("/auth/register", form);
      navigate("/auth/login")
      console.log("register berhasil");
    } catch (error) {
      console.log("register failed", error);
    }
  }

  return { handleChange, handleRegister };
}
