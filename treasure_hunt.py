import asyncio
import random

class TreasureHunt:
    def __init__(self):
        self.locations = {'forest': ['a magical stone', 'a hidden map'], 'cave': ['a mysterious artifact', 'nothing'], 'river': ['golden fish', 'an old bottle'], 'mountain': ['an ancient coin', 'a lost gem']}
        self.treasure_location = random.choice(list(self.locations.keys()))
        self.clue_found = False
        self.score = 0

    async def explore_location(self, location):
        print(f'Exploring {location}...')
        await asyncio.sleep(1)
        found_item = random.choice(self.locations[location])
        if found_item != 'nothing':
            print(f'You found {found_item} at {location}!')
            self.score += 10
            self.clue_found = True
        else:
            print(f'No clues found at {location}.')

        if location == self.treasure_location:
            print("You found the treasure!")
            self.score += 50
            return True
        return False

    async def start_hunt(self):
        print("Starting the treasure hunt!")
        for location in self.locations.keys():
            found = await self.explore_location(location)
            if found: break
        print(f'Your final score is: {self.score}')

async def main():
    game = TreasureHunt()
    await game.start_hunt()

if __name__ == "__main__":
    asyncio.run(main())
