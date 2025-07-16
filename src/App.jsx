import { useState } from "react";
import "./App.css";
import { gemList, gemLevels, specialTower } from "./data/GemsData";

function App() {
  const [ownedGems, setOwnedGems] = useState([]);

  function handleGemClick(gem, level) {
    let newGem = `${gem} ${level}`;

    if (ownedGems.includes(newGem)) {
      const result = ownedGems.filter((gem) => gem !== newGem);

      setOwnedGems(result);
    } else {
      setOwnedGems([...ownedGems, newGem]);
    }
  }

  return (
    <div className="flex">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Chipped</th>
            <th>Flawed</th>
            <th>Normal</th>
            <th>Flawless</th>
            <th>Perfect</th>
          </tr>
        </thead>
        <tbody>
          {gemList.map((gem) => (
            <tr key={gem.name}>
              <td>
                <img src={gem.img} alt="" /> {gem.name}
              </td>
              {gemLevels.map((level) => (
                <td onClick={() => handleGemClick(gem.name, level)} key={level} data-gem={gem.name} data-level={level}>
                  {ownedGems.includes(`${gem.name} ${level}`) ? (
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/4f/Warcraft_III_Reforged_Logo.png"></img>
                  ) : (
                    ""
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ol>
        {specialTower
          .filter((tower) => tower.requires?.some((requiredGem) => ownedGems.includes(requiredGem)))
          .map((tower) => (
            <li key={tower.name}>
              <strong>{tower.name}</strong>
              <ul>
                {tower.requires.map((req) => {
                  if (!ownedGems.includes(req)) {
                    return <li key={req}>{req}</li>;
                  }
                })}
              </ul>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default App;
