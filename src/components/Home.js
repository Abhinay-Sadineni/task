import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Home = () => {
    return (
    <div>
        <div className='relative flex flex-col justify-center min-h-screen from-red-500 to-blue-500 bg-gradient-115 overflow-hidden'>
        <div className='flex flex-col mx-12 mt-2 rounded-lg bg-white items-center justify-center'>
        <h1 className='text-3xl text-center font-semibold text-black'>Home</h1>
        <div className="flex flex-col rounded-b bg-white  justify-center w-full">
              <div className="mx-10">
                <hr className="my-4 w-full" />
                <h1 className="text-8x1 text-center font-bold ">
                  Instructions
                </h1>
                <ol className="list-decimal">
                  <li className="my-4">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Create task</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          To create a task, click the "Create task" button
                          located above or in the Navbar. This will take you to
                          a page where you can create your task using the
                          Markdown Editor. For a task, title, body, and tags
                          (which must be selected from existing ones) are
                          mandatory. Your task will be visible to everyone.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li className="my-4">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Edit task</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          To edit a task, click the "Edit" button located in the
                          page of your task and you will be taken to a page
                          where you can edit your task using Markdown Editor.
                          Edit button will be visible only to the task owner.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
                  <li className="my-4">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Delete task</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          To delete a task, click the "Delete" button located in
                          the page of your task and the entire task will be
                          deleted. Delete button will be visible only to the
                          task owner.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </li>
              
                </ol>
              </div>
            </div>
        </div>
        </div>
    </div>);
}
 
export default Home;