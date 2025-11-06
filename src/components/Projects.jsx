import imgET from "../assets/expense_tracker.png"
import imgGame from "../assets/game.png"

const Card = () => {
  return (
    <>
  <section id="projects" className="bg-gray-2 pb-6 sm:pb-10 pt-12 sm:pt-16 dark:bg-dark lg:pb-20 lg:pt-20">
        <div className="container mx-auto md:mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 text-center">
          Projects
        </h2>
        <div className="w-16 h-1 bg-gray-400 mb-6 mx-auto md:mx-auto"></div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-10 py-6 mx-auto">
            <SingleCard
              image="https://cdn.tailgrids.com/assets/images/application/cards/card-01/image-01.jpg"
              CardTitle="E-Commerce Website"
              titleHref="/#"
              btnHref="/#"
              CardDescription="A responsive online store to make shopping easy."
              Button="View Details"
            />
            <SingleCard
              image={imgET}
              CardTitle="Expense Tracker"
              CardDescription="Smart expense tracker desined to monitor spending."
              Button="View Details"
            />
            <SingleCard
              image={imgGame}
              CardTitle="Tic-Tac-Toe"
              CardDescription="A classic Tic-Tac-Toe game for fun and logic practice."
              Button="View Details"
              btnHref="https:saurabhh-01.github.io/Tic-Tac-Toe/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
  <div className="mx-auto w-full sm:w-auto max-w-xs sm:max-w-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 flex flex-col">
        <div className="w-full h-36 sm:h-48 md:h-56 lg:h-44 overflow-hidden p-2">
          <img src={image} alt={CardTitle} className="w-full h-full object-contain" />
        </div>
        <div className="p-6 text-center xl:p-9 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">{CardTitle}</h3>
            <p className="mb-4 text-sm sm:text-base leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>

          {Button && (
            <div className="mt-4">
              <a
                href={btnHref}
                className="inline-block rounded-full border border-gray-3 px-5 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-blue dark:border-dark-3 dark:text-dark-6"
              >
                {Button}
              </a>
            </div>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
