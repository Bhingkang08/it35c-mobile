import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <style>{`
        ion-action-sheet.my-custom-class {
          --background: #f58840;
          --backdrop-opacity: 0.6;
          --button-background-selected: #e97223;
          --button-color: #000000;
          --color: #fff;
          /* role: "destructive" button iOS styling override */
          --ion-color-danger: #fdfdfd;
        }
      `}</style>
    </div>
  );
};

export default ExploreContainer;
