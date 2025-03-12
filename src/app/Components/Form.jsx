const Form = () => {
  return (
    <>
      <div className="bg-[#E3F4FC] h-screen grid grid-cols-12 ">
        <div className="bg-white col-span-6 mt-20 mb-20 ml-28  p-10  rounded-l-4xl">
            <h1 className="text-[#12303F] inline-block font-bold text-3xl">Mortgage Calculator</h1>
            <h6 className="underline inline-block text-[#12303F] ">clearAll</h6>
            <form action="" className="flex flex-col">
                <label htmlFor="">Mortgage amount</label>
                <input type="text" />
                <label htmlFor="" className="inline-block">Mortgage Term</label>
                <input type="text" />
                <label htmlFor="">Mortgage Rate</label>
                <input type="text" />
                <label htmlFor="">Mortgage Type</label>
                <input type="radio" name="select" id="option-1" />
                <label htmlFor="">Repayment</label>
                <input type="radio" name="select" id="option-2" />
                <label htmlFor="">Interest Only</label>

            </form>
        </div>
        <div className="bg-[#12303F]  col-span-6  mt-20 mb-20 p-10 mr-28  rounded-r-4xl rounded-bl-4xl">
            <div><h1>Your Result</h1>
            <p>Your results are shown below based on the information you provided. 
            To adjust the results, edit the form and click “calculate repayments” again.</p></div>
        </div>
      </div>
    </>
  );
};
export default Form;
