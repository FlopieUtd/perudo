import type { Metadata } from "next";
import Link from "next/link";

const title = "How to Play Perudo - Rules";
const description =
  "The rules of Perudo (Dudo, Liar's Dice): bidding, Aces, Dudo, Calza and Palafico. Then play for free on peru.do, no dice needed.";

// Next.js replaces nested metadata objects instead of merging them, so the layout's
// canonical "/" and og:url would otherwise mark this page as a copy of the homepage.
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rules" },
  openGraph: {
    type: "article",
    url: "https://peru.do/rules",
    title,
    description,
    images: [{ url: "/perudo.webp", alt: "Perudo", width: 500, height: 500 }],
  },
  twitter: { title, description },
};

export default function Rules() {
  return (
    <main className="w-full h-full max-w-[480px] flex flex-col">
      <article className="flex-1 overflow-y-auto p-[12px]">
        <h1 className="text-[32px] mb-[12px] font-bold">How to Play Perudo</h1>
        <p className="mb-[12px]">
          Perudo, also known as Dudo or Liar&apos;s Dice, is a classic dice game of strategy,
          bluffing, and deduction. It dates back to the Inca Empire of the 15th century, making it
          a timeless game.
        </p>
        <p className="mb-[12px]">
          Want to play Perudo, but don&apos;t have any dice on hand? No problem! Each player
          navigates to peru.do on their mobile phone and the game can start!
        </p>

        <h2 className="text-[24px] mb-[12px] font-bold">Setup</h2>
        <p className="mb-[12px]">
          Perudo is played with 2 to 6 players, each starting with 5 dice. The game begins with all
          players rolling their dice in secret, keeping the results hidden from opponents.
        </p>

        <h2 className="text-[24px] mb-[12px] font-bold">Bidding Rules</h2>
        <p className="mb-[12px]">
          The first player makes a bid, guessing how many dice of a specific value are in play
          across all players&apos; dice. For example, a bid might be &quot;<b>three fives</b>
          .&quot; Here&apos;s the catch:
        </p>
        <ul className="mb-[12px] list-disc pl-[20px]">
          <li>
            Ones (or Aces, indicated by a{" "}
            <span className="text-[28px] leading-4 align-sub">𖦹</span> on peru.do) are{" "}
            <b>wild</b>. They count as the current bid value. If the bid is &quot;three
            fives,&quot; a roll of two fives and one Ace is valid.
          </li>
          <li>Once a bid is made, the next player can either raise the bid or challenge it.</li>
        </ul>

        <h2 className="text-[24px] mb-[12px] font-bold">How to Raise a Bid</h2>
        <p className="mb-[12px]">
          To raise a bid, a player must either increase the quantity of dice (e.g., &quot;
          <b>four fives</b>&quot;) or increase the value (e.g., &quot;<b>three sixes</b>&quot;),
          or both. Note that if the player increases the amount, he or she is allowed to decrease
          the value. Aces can also be bid:
        </p>
        <ul className="mb-[12px] list-disc pl-[20px]">
          <li>
            If bidding Aces, the quantity can be halved. For instance, &quot;two Aces&quot; can
            follow a bid of &quot;four sixes.&quot;
          </li>
          <li>
            After an Ace bid, returning to a regular value requires doubling the Aces plus one. For
            example, &quot;five fours&quot; can follow &quot;two Aces.&quot;
          </li>
        </ul>

        <h2 className="text-[24px] mb-[12px] font-bold">Dudo: The Challenge</h2>
        <p className="mb-[12px]">
          Instead of raising the bid, a player can challenge the previous bid by saying &quot;
          <b>Dudo</b>!&quot; This initiates a showdown where all players reveal their dice:
        </p>
        <ul className="mb-[12px] list-disc pl-[20px]">
          <li>
            If the bid was accurate (i.e., there are at least as many dice as stated), the
            challenger loses a die.
          </li>
          <li>If the bid was inaccurate, the bidder loses a die.</li>
        </ul>
        <p className="mb-[12px]">
          The next round begins with the player who lost a die starting the new bid.
        </p>

        <h2 className="text-[24px] mb-[12px] font-bold">Exact Call: Calza</h2>
        <p className="mb-[12px]">
          A player can also declare &quot;<b>Calza</b>&quot; if they believe the bid is{" "}
          <b>exactly correct</b>. Note that Calza can be called by any player at any moment, except
          after one&apos;s own bid. All dice are revealed:
        </p>
        <ul className="mb-[12px] list-disc pl-[20px]">
          <li>If the bid is precise, the player gains a die (up to a maximum of five).</li>
          <li>If the bid is incorrect, the player loses a die.</li>
        </ul>
        <p className="mb-[12px]">
          Whether the bid was exact or not, a new round begins with the player who gained or lost a
          die making the next bid.
        </p>

        <h2 className="text-[24px] mb-[12px] font-bold">Last die: Palafico</h2>
        <p className="mb-[12px]">
          When a player is down to their last die, the game enters a special round called &quot;
          <b>Palafico</b>&quot;:
        </p>
        <ul className="mb-[12px] list-disc pl-[20px]">
          <li>Aces are no longer wild.</li>
          <li>Bids can only increase the quantity of dice, not the value.</li>
        </ul>
        <p className="mb-[12px]">
          If a player loses their final die, they are out of the game. The last player with any
          dice remaining is declared the winner.
        </p>
      </article>
      <div className="p-[12px]">
        <Link
          href="/"
          className="block w-full text-center bg-white rounded-[4px] py-[14px] uppercase text-[18px] font-bold tracking-[4px]"
        >
          Play perudo!
        </Link>
      </div>
    </main>
  );
}
