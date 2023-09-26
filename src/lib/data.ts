import IconEating from "../assets/icon-eating.svg";
import IconExercise from "../assets/icon-exercise.svg";
import IconSleep from "../assets/icon-sleep.svg";
import IconGender from "../assets/icon-gender.svg";
import IconAge from "../assets/icon-age.svg";
import IconPregnancy from "../assets/icon-pregnancy.svg";
import IconMuscle from "../assets/icon-muscle.svg";
import IconRace from "../assets/icon-race.svg";

export interface CardInterface {
  img: string;
  title: string;
  description: string;
  style: string | null;
}

const createCard = (
  img: string,
  title: string,
  description: string,
  style?: string,
): CardInterface => ({
  img,
  title,
  description,
  style: style || null,
});

export const tips: CardInterface[] = [
  createCard(
    IconEating,
    "Healthy eating",
    "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  ),
  createCard(
    IconExercise,
    "Regular exercise",
    "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  ),
  createCard(
    IconSleep,
    "Adequate sleep",
    "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  ),
];

export const limitations: CardInterface[] = [
  createCard(
    IconGender,
    "Gender",
    "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    "lg:col-start-8",
  ),
  createCard(
    IconAge,
    "Age",
    "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    "lg:row-start-2 lg:col-start-5 lg:col-end-9",
  ),
  createCard(
    IconMuscle,
    "Muscle",
    "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    "lg:row-start-2 lg:col-start-9",
  ),
  createCard(
    IconPregnancy,
    "Pregnancy",
    "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.",
    "lg:row-start-3 lg:col-start-3 lg:col-end-7",
  ),
  createCard(
    IconRace,
    "Race",
    "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    "md:col-start-2 lg:row-start-3 lg:col-start-7 lg:col-end-11",
  ),
];
