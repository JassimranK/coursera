def karat(i,j)
    nii = i.to_s.size
    njj = j.to_s.size
    n= [nii,njj].max
    m = ((n.to_f)/2).ceil
    if i<10 and j<10
        return i*j
    else
        puts "Multiplying #{i} X #{j} has n is #{n}"
        xH=i/10**m
        xL=i%10**m
        yH=j/10**m
        yL=j%10**m
        a1 = karat(xH,yH)
        puts "#{xH} * #{yH} yields a1 == #{a1};; match #{xH * yH}"

        d1 = karat(xL,yL)
        puts "#{xL} * #{yL} yields d1 == #{d1};; match #{xL * yL}"
        puts "Calculating e1"
        e1 = karat((xH + xL),(yH +yL))  - a1 - d1
        puts "#{xH} + #{xL} * #{yH} +  #{yL} - #{a1} - #{d1} gives e1 == #{e1}"
        return a1* 10**(2*m) + e1*(10**(m)) + d1
    end

end

# Hello World Program in Ruby
puts "Hello World!";
i=3141592653589793238462643383279502884197169399375105820974944592
j=2718281828459045235360287471352662497757247093699959574966967627


result = karat i, j


puts "comp Result = #{result}"
puts "Actu Result = #{i*j}"
if result == i*j
  puts "HAHA"
end
