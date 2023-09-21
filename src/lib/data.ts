export interface CardInterface {
  img: string;
  title: string;
  description: string;
}

export const tips: CardInterface[] = [
  {
    img: "/src/assets/icon-eating.svg",
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    img: "/src/assets/icon-exercise.svg",
    title: "Regular exercise",
    description:
      " Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    img: "/src/assets/icon-sleep.svg",
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

export const limitations: CardInterface[] = [
  {
    img: "/src/assets/icon-gender.svg",
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    img: "/src/assets/icon-age.svg",
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    img: "/src/assets/icon-muscle.svg",
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    img: "/src/assets/icon-pregnancy.svg",
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimize health risks for both mother and child.",
  },
  {
    img: "/src/assets/icon-race.svg",
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];
