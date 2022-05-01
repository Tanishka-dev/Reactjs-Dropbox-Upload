import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

import DropboxChooser from "react-dropbox-chooser";

export default function Update() {
   const [isDialogOpen, setIsDialogOpen] = useState(false);

   if (isDialogOpen) {
      return <DialogBox />;
   }
   return (
      <div className="flex justify-center">
         <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setIsDialogOpen((s) => !s)}
         >
            Upload File
         </button>
      </div>
   );
}

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBox = () => {
   const [open, setOpen] = React.useState(true);
   const [names, setNames] = useState([]);
   const API_KEY = "qw276lr8lkgprqz";

   if (!open) return <Update />;

   function handleSuccess(files) {
      files.map((file) => {
         setNames((curr) => [...curr, file.name]);
      });
   }

   return (
      <div>
         <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
         >
            <DialogTitle>{"Select file(s) to Upload..."}</DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-slide-description">
                  You can select from Google Drive, Dropbox, OneDrive or Local
                  PC
               </DialogContentText>
               <Box sx={{ m: 2 }} />
               <DialogContentText id="alert-dialog-slide-description">
                  Select files to upload
               </DialogContentText>
               <Box className=" flex flex-row gap-4">
                  <DropboxChooser appKey={API_KEY} success={handleSuccess}>
                     <Button
                        type="button"
                        className=" flex flex-row gap-1  px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 48 48"
                           width="28px"
                           height="28px"
                        >
                           <path
                              fill="#1E88E5"
                              d="M42 13.976L31.377 7.255 24 13.314 35.026 19.732zM6 25.647L16.933 32.055 24 26.633 13.528 19.969zM16.933 7.255L6 14.301 13.528 19.969 24 13.314zM24 26.633L31.209 32.055 42 25.647 35.026 19.732z"
                           />
                           <path
                              fill="#1E88E5"
                              d="M32.195 33.779L31.047 34.462 29.979 33.658 24 29.162 18.155 33.646 17.091 34.464 15.933 33.785 13 32.066 13 34.738 23.988 42 35 34.794 35 32.114z"
                           />
                        </svg>
                        Dropbox
                     </Button>
                  </DropboxChooser>

                  <Button
                     type="button"
                     className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="28px"
                        height="28px"
                     >
                        <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z" />
                        <path
                           fill="#1976D2"
                           d="M9.875 42L16.938 30 45 30 38 42z"
                        />
                        <path
                           fill="#4CAF50"
                           d="M3 30.125L9.875 42 24 18 17 6z"
                        />
                     </svg>
                     Drive
                  </Button>
                  <Button
                     type="button"
                     className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="28px"
                        height="28px"
                     >
                        <path
                           fill="#1565c0"
                           d="M40.429,35.999c0,0,2.89-0.393,3.47-3.185C43.964,32.502,44,32.161,44,31.787 c0-0.233-0.015-0.454-0.044-0.665c-0.428-3.158-3.852-3.868-3.852-3.868s0.595-3.401-2.543-5.183c-3.138-1.78-6.005,0-6.005,0 s-1.678-3.401-6.222-3.401c-5.843,0-6.817,6.64-6.817,6.64S13,25.636,13,30.493C13,35.352,18.031,36,18.031,36L40.429,35.999 L40.429,35.999z"
                        />
                        <path
                           fill="#1565c0"
                           d="M11,30.493c0-4.395,3.286-6.319,5.875-6.945c0.898-2.954,3.384-6.878,8.46-6.878 c0.006,0,0.011,0.001,0.017,0.001c0.007,0,0.013-0.001,0.02-0.001c3.522,0,5.71,1.646,6.892,2.953 c0.65-0.191,1.448-0.343,2.347-0.343c0.004,0,0.007,0.001,0.011,0.001c0.003,0,0.006,0,0.01,0c0.02,0,0.039,0.004,0.059,0.004 C34.729,19,34.063,12,26.013,12c-5.503,0-7.446,4.691-7.446,4.691s-3.992-2.965-8.092,1.133c-2.105,2.104-1.619,5.338-1.619,5.338 S4,23.648,4,28.825C4.001,33.515,9.018,34,9.018,34h2.807C11.32,33.041,11,31.886,11,30.493z"
                        />
                     </svg>
                     OneDRive
                  </Button>
                  <Button
                     type="button"
                     className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                     Browse File...
                  </Button>
               </Box>
            </DialogContent>
            <Box sx={{ border: 1 }} className="m-6">
               <DialogContent className="flex flex-col ">
                  {names?.map((name) => (
                     <DialogContentText key={name}>{name}</DialogContentText>
                  ))}
               </DialogContent>
            </Box>
            <Box className=" flex flex-row gap-4 m-6">
               <Button
                  type="button"
                  className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
               >
                  Remove Selected File
               </Button>
               <Button
                  type="button"
                  className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
               >
                  Clear File Selection
               </Button>
               <Button
                  type="button"
                  className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
               >
                  Update File
               </Button>
            </Box>
            <DialogActions>
               <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogActions>
         </Dialog>
      </div>
   );
};
