using System;

namespace cmd_args_demo
{
  class Program
  {

    static void Main(string[] args)
    {
      for (int i = 0; i < args.Length; i++)
      {
        string item = args[i];
        Console.WriteLine($"argument {i} : {item}");
      }
      int multiplier = 7;
      if (args.Length > 0)
      {
        int.TryParse(args[0], out multiplier);
      }

      if (args.Length > 1)
      {
        int max = 10;
        int.TryParse(args[1], out max);
      }

      doStuff(multiplier, 10);

      bool result = ask("Er der pause");
      Console.WriteLine(result + " Kom igang med arbejdet!");
      Console.WriteLine("done");
    }

    static bool ask(string question)
    {
      Console.WriteLine(question + "?");
      return false;
    }

    static void doStuff(int multiplier, int iterationCount)
    {
      for (int i = 1; i <= iterationCount; i++)
      {
        int value = multiplier * i;
        Console.WriteLine($"{i} * {multiplier} : {value}");
      }
    }

  }
}
