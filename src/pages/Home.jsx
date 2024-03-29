import MyImage from "../component/DisplayImage";
import Menu from "../component/Menu";
import PageFooter from "../component/PageFooter"

function Home() {
  const header = (
    <>
      <Menu></Menu>
    </>
  );

  const foot = (
    <>
      <PageFooter></PageFooter>
    </>
  );

  return (
    <div id="pageContainer">
      <div>
        {header}
        <div className="flex flex-wrap justify-content-center align-item-center">
          <MyImage></MyImage>
        </div>
        {foot}
      </div>
    </div>
  );
}

export default Home;
