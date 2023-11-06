import { IThreadPost } from "@/interfaces/thread";
import { API } from "@/libs/api";
import { GET_THREADS } from "@/stores/rootReducer";
import { RootState } from "@/stores/types/rootState";
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useThreads() {
  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.thread.threads);
  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  });

  async function getThreads() {
    const response = await API.get(`/threads?limit=10`);
    dispatch(GET_THREADS(response.data));
  }

  async function handlePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("content", form.content);
    formData.append("image", form.image as File);
    try {
      const response = await API.post("/thread", formData);
      setForm({
        content:"",
        image:""
      })
      setPreview(null)
      console.log("Thread added successfully!", response);
    } catch (error) {
      
    } 
    
    getThreads();
  }

  useEffect(() => {
    getThreads();
  }, [threads]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;

    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }
// for refference current click address
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  //PR
  const [preview,setPreview] = useState<string | null>()
  const [dataImage,setDataImage] = useState< any  >(null) //input file

  const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
      const selectedImage  = event.target.files && event.target.files[0]
      setDataImage(selectedImage)
      const selectedPreview = event.target.files && event.target.files[0]
      if (selectedPreview){
        if(selectedPreview instanceof File){
          setPreview(URL.createObjectURL(selectedPreview))
        }
      }else{
        setPreview(null)
      }
  }
  const handleClearFile = ()=>{
    setDataImage(null);
    if(fileInputRef.current){
      fileInputRef.current.value=""
    }
  }
  const handleClosePreview  = ()=>{
    setPreview(null)
    handleClearFile()
  }

  return { handleChange, handlePost, fileInputRef, handleButtonClick, threads,form ,handleImageChange,preview,dataImage,handleClosePreview};
}
