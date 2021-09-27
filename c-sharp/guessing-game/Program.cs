using System;

namespace guessing_game
{



  class Program
  {
    static void Main(string[] args)
    {

      GuessingGame game = new GuessingGame(1, 5);

      do
      {
        game.play();
      } while (game.wantsRematch());

    }
  }


  class GuessingGame
  {
    private int min;
    private int max;

    public GuessingGame(int min, int max)
    {
      this.min = min;
      this.max = max;
    }

    public bool wantsRematch()
    {

      Console.Write("Vil du spille igen? (y/n): ");
      string answer = Console.ReadLine();

      return answer.Equals("y");
    }


    public void play()
    {
      Random randomNumberGenerator = new Random();
      int secretNumber = randomNumberGenerator.Next(min, max);

      Console.WriteLine($"Gæt et tal mellem {min} og {max}.");

      bool done = false;
      while (!done)
      {
        Console.Write("Skriv et tal: ");
        string line = Console.ReadLine();

        bool isValidInteger = int.TryParse(line, out int guess);
        if (!isValidInteger)
        {
          Console.WriteLine("Dit gæt skal være et heltal!");
          continue;
        }

        bool isInValidRange = min <= guess && guess <= max;
        if (!isInValidRange)
        {
          Console.WriteLine($"Dit gæt skal være mellem {min} og {max}.");
          continue;
        }

        bool isCorrectGuess = guess == secretNumber;
        if (isCorrectGuess)
        {
          Console.WriteLine($"Rigtigt! Flot gættet. Det hemmelige tal er {secretNumber}.");
          done = true;
        }
        else
        {
          if (guess < secretNumber)
          {
            Console.WriteLine("Dit gæt er for lavt");
          }

          if (guess > secretNumber)
          {
            Console.WriteLine("Dit gæt er for højt");
          }

          Console.WriteLine("Gæt igen!");
        }
      }
    }

  }



}
