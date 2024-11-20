allWords= []



def readFile(f):
    with open("words.txt", "r") as f:
        for line in f:
            words = line.strip().split()
            allWords.extend(words)


