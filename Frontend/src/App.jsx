import { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import QRCodeGenerator from "qrcode";

const API_BASED_URL = import.meta.env.VITE_BACKEND_URL;
console.log("API_BASED_URL",API_BASED_URL);

function App() {
  const [url,setUrl] = useState("");
  const [shortUrl,setShortUrl] = useState("");
  const [copied,setCopied] = useState(false);
  const [qrImage,setQrImage] = useState("");

  const handle = async ()=>{
    if(!url)return ;

    try{
      const res = await axios.post(`${API_BASED_URL}/shorten`,{
        originalUrl : url
      });

      const newShortUrl = res.data.shortUrl;
      setShortUrl(newShortUrl);
      setCopied(false);

      const qr = await QRCodeGenerator.toDataURL(newShortUrl);
      setQrImage(qr);
    }
    catch(e){
      console.log(e);
      alert('Something Went Wrong');
    }
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(()=>setCopied(false),2000);
  }

  return <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6">
    <h1 className="text-4xl font-bold mb-4 text-center">URL-SHORTNER</h1>
    <div className="flex flex-col gap-3 w-full max-w-3xl">
      <input type="text" className="input input-success w-full" placeholder="Enter long URL" value={url} onChange={(e)=>setUrl(e.target.value)}/>
      <button onClick={handle} className="btn btn-primary w-full sm:auto">
        Shorten
      </button>
    </div>
    {shortUrl && (
      <div className="flex flex-col items-center max-w-3xl w-full">
        <p className="font-medium mb-2">Your short link : </p>
        <a className="link link-primary break-all" href={shortUrl}>{shortUrl}</a>
        <button onClick={handleCopy} className={`btn mt-2 w-full ${copied?"btn-success":"btn-secondary"}`}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <div className="bg-white p-4 rounded-lg shadow mt-6">
          <p className="mb-2 text-center font-semibold text-gray-800">Scan QR Code :</p>
          <QRCode value={shortUrl} size={180} />
        </div>
        {qrImage && (
           <a className="btn btn-accent mt-3 w-full" download="qr-code.png" href={qrImage}>Download</a>
        )}
      </div>
    )}
  </div>
}

export default App
