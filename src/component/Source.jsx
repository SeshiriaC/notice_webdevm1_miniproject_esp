import Menu from "./Menu";
import PageFooter from "./PageFooter";

function Source() {
  return (
    <div>
      <Menu/>
      <div>
        <div className="block p-4 mb-1"><h1 className="text-color">Logos et images</h1></div>

        <div className="block p-4 mb-3">
          <a href="https://www.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_7906228.htm#fromView=search&page=1&position=39&uuid=9d30ff99-0fd3-4ed0-b809-733b44660a14">
            Image by storyset on Freepik
          </a>
        </div>
        <div className="block p-4 mb-3">
          <a
            href="https://www.flaticon.com/fr/icones-gratuites/facebook"
            title="facebook icônes"
          >
            Facebook icônes créées par Hight Quality Icons - Flaticon
          </a>
        </div>
        <div className="block p-4 mb-3">
          <a
            href="https://www.flaticon.com/fr/icones-gratuites/linkedin"
            title="linkedin icônes"
          >
            Linkedin icônes créées par Freepik - Flaticon
          </a>
        </div>
        <div className="block p-4 mb-3">
          <a
            href="https://www.flaticon.com/fr/icones-gratuites/github"
            title="github icônes"
          >
            Github icônes créées par Pixel perfect - Flaticon
          </a>
        </div>
      </div>
      <PageFooter/>
    </div>
  );
}

export default Source;
