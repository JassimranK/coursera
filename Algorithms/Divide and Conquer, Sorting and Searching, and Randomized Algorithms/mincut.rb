def contract (graphHash)
  while graphHash.keys.count > 2
    vertex1 = graphHash.keys.sample
    vertex2 = graphHash[vertex1].sample
    puts "Vertex1: #{vertex1} and Vertex2: #{vertex2}"
    graphHash[vertex2].each do |edge|
      if edge != vertex1
        graphHash[vertex1] << edge
      end
    end

    #Deleting the contracted node
    graphHash[vertex2].each do |edge|
      graphHash[edge].delete(vertex2)
      if edge != vertex1
        graphHash[edge] << vertex1
      end
      graphHash.delete(vertex2)
    end

  end
  mincut = graphHash[graphHash.keys()[0]].length
  return mincut
end


graphHash = Hash.new

File.open("kargerMinCut.txt").each do |number|
    node,edg = number.split(" ",2)
    edges = []
    edg.split(" ").each do |edge|
      edges << edge.to_i
    end
    graphHash[node.to_i] = edges
end

cut = contract graphHash
puts "cut = #{cut}"
