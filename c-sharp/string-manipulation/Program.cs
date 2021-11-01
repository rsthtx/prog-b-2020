using System;

namespace string_manipulation
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("String manipulation");
      Opgave1();
      Opgave2("hej med dig");
      Opgave2("Nu er der er måske snart frikvarter");
    }

    static void Opgave1()
    {
      Console.WriteLine("### Opgave 1");
      // do stuff: løs opgaven
    }
    static void Opgave2(string text)
    {
      Console.WriteLine("### Opgave 2");
      // do stuff: løs opgaven

      Console.WriteLine(text);
    }
  }
}
